import ModalVideo from 'react-modal-video';
const VideoPlay=({isOpen,setOpen})=>{
    console.log(isOpen);

    return(<>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="HMXimm-ydLo" onClose={() => setOpen(false)} />

    </>);
}
export default VideoPlay;