import avatar from '/me.jpg';

export function Welcome() {
  return (
    <main className="p-8 mx-auto my-0 w-full md:w-[800px]">
      <header className="text-center flex flex-row item-center mb-8">
        <img alt="Ryo Katsuma" src={avatar} className="rounded-[9999px] w-[80px] h-[80px]" />
        <h1 className="ml-4 line-height-[1.15rem] text-[2.5rem] md:text-[3rem] mt-3 md:mt-0 font-bold flex">Ryo Katsuma</h1>
      </header>

      <div className="p-0 m-0 mb-8">
        <div className="mb-8">
          <h2 className="mb-4 line-height-[1.15rem] text-[2rem] font-bold">Job</h2>
          <dl>
            <dt><a href="https://info.cookpad.com">Cookpad Inc.</a>(May 2009 - Current)</dt>
            <dd className="mb-4 ml-0">Engineer, Manager</dd>
          </dl>

          <dl>
            <dt><a href="https://utagoe.com">Utagoe Inc.</a>(Apr 2006 - Apr 2009)</dt>
            <dd className="mb-4 ml-0">Project manager</dd>
          </dl>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 line-height-[1.15rem] text-[2rem] font-bold">Education</h2>
          <dl>
            <dt>M.S., <a href="https://www.waseda.jp">Waseda University</a>, Tokyo, Japan. (Apr 2004 - Mar 2006)</dt>
            <dd className="mb-4 ml-0">Graduated with a Master&apos;s degree in Information and Computer Science</dd>
          </dl>

          <dl>
            <dt>B.S., <a href="https://www.waseda.jp">Waseda University</a>, Tokyo, Japan. (Apr 2000 - Mar 2004)</dt>
            <dd className="mb-4 ml-0">Graduated with a Bachelor&apos;s degree in Information and Computer Science</dd>
          </dl>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 line-height-[1.15rem] text-[2rem] font-bold">On the web services</h2>

          <ul className="ml-[-1.5rem] list-disc">
            <li className="ml-10 my-2"><a href="https://blog.katsuma.tv">Blog</a></li>
            <li className="ml-10 my-2"><a href="https://x.com/ryo_katsuma">X</a></li>
            <li className="ml-10 my-2"><a href="https://github.com/katsuma">GitHub</a></li>
            <li className="ml-10 my-2"><a href="https://facebook.com/katsuma">Facebook</a></li>
            <li className="ml-10 my-2"><a href="https://speakerdeck.com/katsuma">Speaker Deck</a></li>
            <li className="ml-10 my-2"><a href="https://linkedin.com/katsuma">LinkedIn</a></li>
            <li className="ml-10 my-2"><a href="https://www.wantedly.com/id/ryo_katsuma">Wantedly</a></li>
            <li className="ml-10 my-2"><a href="https://instagram.com/katsuma">Instagram</a></li>
          </ul>
        </div>
      </div>

      <footer className="flex py-4 justify-center items-center border-t-gray-300">
        Copyright (c) Ryo Katsuma
      </footer>
    </main>
  );
}
