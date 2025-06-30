"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PaginaCalculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operacao, setOperacao] = useState("");

  return (
    <>
      <div className="h-screen x-full flex flex-col items-center justify-center">
        <h1 className="text-3xl">Pagina da Calculadora</h1>

        <form action="" className="flex flex-col gap-4 w-full max-w-xs">
          <Input
            type="number"
            placeholder="Primeiro número"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            required
          ></Input>
          <Select value={operacao} onValueChange={setOperacao} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione a operação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={1} value={"Somar"}>
                {"Somar"}
              </SelectItem>
              <SelectItem key={2} value={"Subtrair"}>
                {"Subtrair"}
              </SelectItem>
              <SelectItem key={3} value={"Multiplicar"}>
                {"Multiplicar"}
              </SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Segundo número"
            value={numero2}
            onchange={(e) => setNumero2(e.target.value)}
            required
          ></Input>
          <Button>Realizar a Operação</Button>
        </form>
      </div>
    </>
  );
}
