export default function Custombutton({label, className }) {
  return (
    <div className={className}>
        <button className="bg-[#3498db] w-20 pt-1 pb-1 rounded-xl text-white text-lg">{label}</button>
    </div>
  )
}
