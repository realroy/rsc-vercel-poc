"use client";

import { Modal } from "./Modal";
import { useRouter } from "next/navigation";

export type ModalInterceptionProps = {
  children: React.ReactNode;
};

export function ModalInterception({ children }: ModalInterceptionProps) {
  const router = useRouter();
  return (
    <Modal
      isOpened
      onClose={() => {
        router.back();
      }}
    >
      {children}
    </Modal>
  );
}
