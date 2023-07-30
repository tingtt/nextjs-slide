import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const Compare5 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='比較' />
    <div className='text-xl font-light'>比較</div>
    <br />
    <br />
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th className='!text-base text-center'>Push型</th>
          <th className='!text-base text-center'>Pull型 + Kubernetes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='!p-8 !border-b-4'>構築コスト</td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-green-500'>低</span>
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-red-500'>高</span>
          </td>
        </tr>
        <tr>
          <td className='!p-8 !border-b-4'>
            障害時のロールバック処理の構築コスト
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-green-500'>実装済</span>
          </td>
        </tr>
        <tr>
          <td className='!p-8 !border-b-4'>
            アプリケーションの管理コスト
            <br />
            <span className='text-sm opacity-70'>
              ※ ファイル・使用ポート・コンテナイメージ など
            </span>
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-yellow-500'>中</span> ~{' '}
            <span className='text-red-500'>高</span>
          </td>
        </tr>
        <tr>
          <td className='!p-8 !border-b-4'>監視コスト</td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-8 !border-b-4 text-center'>
            <span className='text-green-500'>低</span>
          </td>
        </tr>
        <tr>
          <td className='!p-8 !border-b-0'>CD対象アプリケーションの可用性</td>
          <td className='!p-8 !border-b-0 text-center'>
            <span className='text-red-500'>低</span>
          </td>
          <td className='!p-8 !border-b-0 text-center'>
            <span className='text-green-500'>高</span>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
