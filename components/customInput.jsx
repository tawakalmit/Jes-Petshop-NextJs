export default function CustomInput({label, type, onChange, id}) {
  return (
    <div className="w-9/12 mx-auto mt-5">
        <p className="text-xl text-white">{label}</p>
        <input className="rounded p-2 w-full" type={type} onChange={onChange} id={id} />
    </div>
  )
}
