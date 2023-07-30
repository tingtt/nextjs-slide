import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const SumUp = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header />
    <div className='text-xl font-light'>Sum up</div>
    <div className='flex flex-col h-[80%] justify-center pt-10'>
      <ul
        className={`
          list-disc list-inside space-y-16 text-lg
          [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
        `}
      >
        <li>おうち CI/CD 談義をぜひ</li>
        <li>オンプレでBlue/Greenデプロイをやりたい</li>
        <ul>
          <li>RDBのスキーマ変更を含むアップデートのダウンタイムに悩み中</li>
        </ul>
        <li>systemd-cd 使ってほしい</li>
        <ul>
          <li className='link'>
            <a
              href={'https://docs.systemd-cd.org'}
              target='_blank'
              rel='noopener noreferrer'
            >
              https://docs.systemd-cd.org
            </a>
          </li>
        </ul>
      </ul>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
