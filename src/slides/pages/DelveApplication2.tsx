import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const DelveApplication2 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='アプリケーション' />
    <div>
      <div className='text-xl font-light'>Javaの課題を思い出してみる</div>
    </div>
    <div className='flex-auto pt-16 h-[70%] flex gap-20'>
      <div>
        <SyntaxHighlighter language='java' style={nord}>
          {`import java.util.Scanner;
// ...
    // Scannerクラス
    Scanner scanner = new Scanner(System.in);

    // 入力文字列を取得
    System.out.print("input > ");
    String input = scanner.nextLine();

    // Helloを出力
    System.out.println("Hello, "+input+"!");
// ...`}
        </SyntaxHighlighter>
      </div>
      <div>
        <div className='text-lg my-6'>実行</div>
        <div>
          <SyntaxHighlighter language='console' style={nord}>
            {`$ java main.java
input > ハイプロ
Hello, ハイプロ!`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
