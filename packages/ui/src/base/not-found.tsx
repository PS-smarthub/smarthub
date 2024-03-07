export const NotFound = () => {
  return (
    <main className="w-full h-full flex items-center">
      <div className="flex flex-col items-center justify-center m-auto text-center w-[90%]">
        <h1 className="font-bold text-blue-50 text-[10rem] mb-[2rem]">404</h1>
        <p className="mb-[1rem] text-3xl">
          Pedimos desculpas, mas a página que procura não está disponível.
        </p>
        <a className="text-blue-50 underline hover:text-blue-700" href="/">
          voltar para a página inicial
        </a>
      </div>
    </main>
  );
};
