

const Sidebar = () => {
  return (
    <div>
        <div className="bg-white border drop-shadow-sm font-extrabold text-[2rem] text-yellow-300 w-[20rem] h-[80vh] flex flex-col gap-10 p-5 rounded">
            <div className="hover:bg-green-500"><a href="/Dashboard">Dashboard</a></div>
            <div className="hover:bg-green-500"><a href="/Event">Verification</a></div>
            <div className="hover:bg-green-500"><a href="/Signup">Insurance</a></div>
            <div className="hover:bg-green-500"><a href="/Login">Enclosure</a></div>
            <div className="hover:bg-green-500"><a href="/Scroll">Payments</a></div>
        </div>
    </div>
  )
}

export default Sidebar