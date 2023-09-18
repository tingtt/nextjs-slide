import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import Image from 'next/image'
import { SvgGitHub } from 'slides/components/SvgGitHub'
import { SvgTwitter } from 'slides/components/SvgTwitter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { SvgWeb } from 'slides/components/SvgWeb'

export const IntroMe = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header />
    <div className='flex-1 text-xl font-light'>自己紹介</div>
    <div className='flex-auto flex items-center gap-24'>
      <div className='grid gap-16'>
        <Image alt='me' src='/me.webp' width={400} height={400} />
        <div className='grid gap-4'>
          <div className='flex gap-4'>
            <SvgGitHub width={40} height={40} />
            <a href='https://github.com/tingtt' target='_brank'>
              tingtt
            </a>
          </div>
          <div className='flex gap-4'>
            <SvgTwitter width={40} height={40} />
            <a href='https://twitter.com/tiTakung' target='_brank'>
              tiTakung
            </a>
          </div>
          <div className='flex gap-4'>
            <SvgWeb width={40} height={40} />
            <a href='https://www.tingtt.jp' target='_brank'>
              tingtt.jp
            </a>
          </div>
        </div>
      </div>
      <div>
        <SyntaxHighlighter language='rust' style={nord}>
          {`match self {
  From    => ["神戸"]
  School  => ["ECCコンピュータ専門学校 / ITカレッジ 4年制 23卒"]
  Company => ["株式会社ハートビーツ"] // バイト 10ヶ月, 正社員 5ヶ月
  Role    => ["インフラエンジニア"] // 運用・保守
  Hobbies => ["開発"]
  SKills  => [
    "Go", "Rust", // バックエンド・WASM・インフラ
    "TypeScript", "React.js", "Next.js", // Webフロントエンド
    "Linux", "Kubernetes", "CI/CD" // インフラ
  ]
}`}
        </SyntaxHighlighter>
      </div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
