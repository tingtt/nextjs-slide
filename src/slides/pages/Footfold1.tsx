import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { TextError } from 'slides/components/TextError'

export const Footfold1 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='足がかり' />
      <div className='flex-1 text-xl font-light'>「つよつよ」の要素</div>
      <div className='flex flex-col h-[80%] justify-center pt-10'>
        <ul
          className={`
            list-disc list-inside space-y-16 text-lg
            [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-36
          `}
        >
          <li className='click-1'>情報収集力</li>
          <ul>
            <li className='click-2'>
              正確な情報を
              <TextError className='mx-4'>1次ソース</TextError>
              or
              <TextError className='mx-4'>信頼できるソース</TextError>
              から
            </li>
          </ul>
          <li className='click-3'>自分のものにしてる</li>
          <ul>
            <li className='click-4'>
              理解が<TextError className='mx-4'>深い</TextError>
              <span className='click-5 ml-40 text-sm'>
                「作ったわけじゃないのになんでそこまで知ってるんですか！？」by
                私
              </span>
            </li>
          </ul>
          <li className='click-6'>範囲がすごい</li>
          <ul>
            <li className='click-7'>
              広い
              <span className='click-8 ml-80 text-sm'>
                「それもできるんですか！？」by 私
              </span>
            </li>
          </ul>
        </ul>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  8
)
