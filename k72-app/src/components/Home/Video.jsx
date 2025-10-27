function Video() {
    return (
        <>
            <div className="h-full w-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="../../../public/video.mp4"
                />
            </div>
        </> 
    );
}

export default Video;