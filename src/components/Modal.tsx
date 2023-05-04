'use client';

import * as Dialog from "@radix-ui/react-dialog";

export type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpened, children, onClose }: ModalProps) {
  return (
    <Dialog.Root open={isOpened} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black filter blur-md bg-opacity-25 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-2xl focus:outline-none">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
