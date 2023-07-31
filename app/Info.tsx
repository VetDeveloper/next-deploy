import Image from "next/image"

const Info = () => {
  return (
    <>
      <div className="mt-4 w-[70%] items-center justify-between font-mono text-sm flex">
        <a target="_blank" href="https://docs.google.com/document/d/1BYemAPnx72fhgX2EuiIOTzbIQJLUaYuVfTVdcBHW6EI/">
          <div className="group rounded-[2rem] sm:rounded-[3rem] flex justify-center text-center relative overflow-hidden cursor-pointer">
            <Image
              width={220}
              height={20}
              alt="My photo"
              src={'./me.jpg'}
              className={
                'rounded-[2rem] sm:rounded-[3rem] object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-[145px] sm:w-[220px]'
              }></Image>
            <div className="absolute bg-black w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-50" />
          </div>
        </a>

        <a className="text-3xl sm:text-4xl relative" target="_blank" href="https://vk.com/starosta_mo">
          My VK
          <span className="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-sky-400 opacity-75"></span>
        </a>
      </div>

      <div className="mb-10 sm:mb-16 mt-16 relative flex flex-col animate-pulse place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className="text-3xl sm:text-4xl">developer</h2>
        <h2 className="text-3xl sm:text-4xl">Mikhailov Aleksandr</h2>
      </div>
    </>
  )
}

export default Info