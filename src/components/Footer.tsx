export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-[36vh] w-full bg-neutral-100 fixed -z-50 bottom-0 text-neutral-900"
    >
      <div className="flex justify-between p-12 h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Always looking forward to connect</p>
            <p className="text-4xl font-medium">hello@thejus.design</p>
          </div>
          <div>Bengaluru, Karnataka</div>
        </div>
        <div className="flex flex-col gap-4 w-1/12">
          <a>LinkedIn</a>
          <a>Medium</a>
          <a>Behance</a>
          <a>Github</a>
        </div>
      </div>
    </footer>
  );
}
