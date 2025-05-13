import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const cepSchema = Yup.object({
  cep: Yup.string()
    .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
    .required("Campo obrigatório"),
});

export function DeliveryChecker() {
  const [address, setAddress] = useState<{
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  } | null>(null);

  const formik = useFormik({
    initialValues: { cep: "" },
    validationSchema: cepSchema,
    onSubmit: async (values) => {
      try {
        const cleanCep = values.cep.replace("-", "");
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await res.json();
        if (data.erro) throw new Error();
        setAddress(data);
      } catch {
        formik.setFieldError("cep", "CEP não encontrado");
        setAddress(null);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-6">
      <label className="font-semibold">Calcular Frete (CEP):</label>
      <div className="flex gap-2 mt-2">
        <input
          name="cep"
          value={formik.values.cep}
          onChange={formik.handleChange}
          className="border p-2 rounded"
          placeholder="Digite o CEP"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Verificar
        </button>
      </div>
      {formik.errors.cep && (
        <p className="text-red-500 mt-2">{formik.errors.cep}</p>
      )}
      {address && (
        <p className="mt-2 text-sm text-gray-700">
          {address.logradouro}, {address.bairro}, {address.localidade}-
          {address.uf}
        </p>
      )}
    </form>
  );
}
