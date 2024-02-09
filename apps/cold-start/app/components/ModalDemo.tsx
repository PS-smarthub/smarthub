import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Modal";

export function ModalDemo({ button }: { button: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b border-gray-300 px-2 pb-4">
            Agendamento
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-start gap-4 py-4">
          <div className="flex gap-4">
            <label htmlFor="name" className="text-right">
              De
            </label>
            <input type="date" className="border border-gray-400 rounded" />
          </div>
          <div className="flex gap-4">
            <label htmlFor="username" className="text-right">
              Até
            </label>
            <input type="date" className="border border-gray-400 rounded" />
          </div>
          <div className="flex gap-4">
            <select />
          </div>
        </div>
        <DialogFooter>
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="bg-green-400 rounded text-white font-semibold p-1 w-[40%]"
            >
              Confirmar
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
