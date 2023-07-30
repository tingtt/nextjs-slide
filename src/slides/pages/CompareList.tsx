import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const CompareList = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header />
    <div className='text-xl font-light'>やってみたリスト</div>
    <div className='flex flex-col h-[80%] justify-center pt-16'>
      <ul
        className={`
          list-disc list-inside space-y-16 text-lg
          [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
        `}
      >
        <li>GitLab CI/CD, GitHub Actions</li>
        <li>Kubernetes + ArgoCD</li>
        <li>systemd-cd</li>
      </ul>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
