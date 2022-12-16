export const Summary = () => {
  return (
    <div className='layout-common flex-col'>
      <div className='text-7xl font-light'>Summary</div>
      <div className='flex flex-col h-full mt-32 justify-center'>
        <ul
          className={`
              list-disc list-inside space-y-14 text-6xl
              [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
            `}
        >
          <li>Hackable</li>
          <li>Manage with git</li>
          <ul>
            <li>Versioning</li>
            <li>CI/CD</li>
          </ul>
          <li>React / TailwindCSS</li>
          <ul>
            <li>Fast develop</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}
