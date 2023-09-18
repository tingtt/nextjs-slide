import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/image'

export const DelveApplication5 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='アプリケーション' />
      <div>
        <div className='text-xl font-light'>Webサーバーのコードを見てみる</div>
      </div>
      <div className='flex-auto pt-20 h-[70%] flex gap-16'>
        <div className='text-sm'>
          <SyntaxHighlighter language='go' style={nord}>
            {`import "github.com/labstack/echo/v4"

func main() {
  e := echo.New()

  // \`/hello\` -> hello.html を返す
  e.GET("/hello", func (c echo.Context) error {
    return c.Render(
      http.StatusOK,
      "hello.html",
      data,
    )
  })
}`}
          </SyntaxHighlighter>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='click-1 text-sm'>
            <SyntaxHighlighter language='html' style={nord}>
              {`<html> <!-- hello.html -->
  <body>
    <p>Hello, world!</p>
  </body>
</html>`}
            </SyntaxHighlighter>
          </div>
          <div className='click-2 rounded-2xl border border-base-content border-opacity-50'>
            <Image
              className='rounded-2xl'
              alt='echo_hello'
              src='/echo_hello.webp'
              width={384 * 1.8}
              height={196 * 1.8}
            />
          </div>
        </div>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  2
)
