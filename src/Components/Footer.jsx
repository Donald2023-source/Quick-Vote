import { Link } from "react-router-dom"
const Footer = () => {
    return ( 
        <div className="absolute top-[150rem] px-20 py-10 mt-8 bg-primary w-full flex flex-col items-center mx-auto gap-5">
            <div>
                <Link to={'/'}>
                    <h3 className="text-white border py-2 px-4 rounded-full w-fit font-bold text-xl">
                        <span className="text-blue-400">I</span>vote
                    </h3>
                </Link>
            </div>
            <p className="text-white">© 2024 iVote. All rights reserved.</p>
        </div>
    )
}
export default Footer