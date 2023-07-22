.PHONY: branch
BRANCH := ""
define commit_msg2
chore(k8s): add manifests

- `argoproj.io.Application`
- `networking.k8s.io.Ingress`
endef
export commit_msg2
branch: .git
	git checkout -b ${BRANCH}
	sed 's/BRANCH/${BRANCH}/g' .github/workflows/release.yml.template | \
		tee .github/workflows/release.yml > /dev/null
	sed 's/BRANCH/${BRANCH}/g' .k8s/argocd/application.yml.template | \
		tee .k8s/argocd/application.yml > /dev/null
	sed 's/BRANCH/${BRANCH}/g' .k8s/ingress/ingress.yml.template | \
		tee .k8s/ingress/ingress.yml > /dev/null
	git add .github/workflows/release.yml
	git commit -m 'ci(github): add jobs to publish container image'
	git add  \
		.k8s/argocd/application.yml \
		.k8s/ingress/ingress.yml
	git commit -m "$$commit_msg2"

.PHONY: tag
BRANCH := $(shell git branch --show-current)
VERSION := "0.0.0"
tag: .git
	sed 's/BRANCH/${BRANCH}/g; s/VERSION/${VERSION}/g' .k8s/deploy.yml.template | \
		tee .k8s/deploy.yml > /dev/null
	git add .k8s/deploy.yml
	git commit -m 'chore(k8s): update `Deployment` manifest'
	git tag ${BRANCH}-v${VERSION}

.PHONY: refactor_images
refactor_images:
	@cd public/ ; \
		for file in $$(find * | grep -E ".(png|jpg|jpeg)$$"); do \
			cwebp $${file} -o $${file%.*}.webp > /dev/null ; \
			cd ../ ; \
			find data -name '*.ts' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find data -name '*.tsx' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find src -name '*.ts' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			find src -name '*.tsx' -exec gsed -i "s@$${file}@$${file%.*}.webp@g" {} + ; \
			cd public/ ; \
			rm $${file} ; \
			echo "Compress '$${file}' -> '$${file%.*}.webp'" ; \
		done