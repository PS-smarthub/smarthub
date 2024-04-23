export default function Home() {

  return (
    <>
      <div className="relative inline-block w-64">
        <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline">
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a1 1 0 0 1-.7-.3l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-.7.3z" />
          </svg>
        </div>
      </div>
    </>
  );
}
