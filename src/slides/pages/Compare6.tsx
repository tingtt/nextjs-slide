import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const Compare6 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='比較' />
    <div className='text-xl font-light'>比較 (+ 自作ツール)</div>
    <br />
    <br />
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th className='!text-base text-center'>Push型</th>
          <th className='!text-base text-center'>
            Pull型 + <br />
            Kubernetes
          </th>
          <th className='!text-base text-center'>
            <span>systemd-cd</span>
            <br />
            <span className='text-sm'>（Pull型）</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='!p-5 !border-b-2'>構築コスト</td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>低</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>低</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5 !border-b-2'>
            障害時のロールバック処理の構築コスト
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>実装済</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>実装済</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5 !border-b-2'>
            アプリケーションの管理コスト
            <br />
            <span className='text-base opacity-70'>
              ※ ファイル・使用ポート・コンテナイメージ など
            </span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-yellow-500'>中</span> ~{' '}
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>低</span> ~{' '}
            <span className='text-yellow-500'>中</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5 !border-b-2'>監視コスト</td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-red-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>低</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>低</span> ~{' '}
            <span className='text-yellow-500'>中</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5 !border-b-2'>CD対象アプリケーションの可用性</td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-red-500'>低</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>高</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-yellow-500'>中</span> ~{' '}
            <span className='text-red-500'>低</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5 !border-b-2'>速度</td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-green-500'>速</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-yellow-500'>中</span> ~{' '}
            <span className='text-red-500'>遅</span>
          </td>
          <td className='!p-5 !border-b-2 text-center'>
            <span className='text-yellow-500'>中</span>
          </td>
        </tr>
        <tr>
          <td className='!p-5'>GitOps（IaC）</td>
          <td className='!p-5 text-center'>
            <span className='text-red-500'>✗</span>
          </td>
          <td className='!p-5 text-center'>
            <span className='text-green-500'>○</span>
          </td>
          <td className='!p-5 text-center'>
            <span className='text-yellow-500'>△</span>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
