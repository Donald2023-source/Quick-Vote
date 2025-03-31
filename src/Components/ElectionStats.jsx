import { twMerge } from "tailwind-merge"

const ElectionStats = ({className}) => {
    return (
        <div className={twMerge('flex-1 border w-full', className)}>
            this is the election stats
        </div>
    )
}
export default ElectionStats