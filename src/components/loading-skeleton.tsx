import classes from './loadingSkeleton.module.css';
export default function LoadingSkeleton() {
    return (
        <div className="fixed top-0 h-screen w-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <div className={classes['lds-grid']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    )
}