
import koiVideo from '../../assets/videos/koiVideo.mp4'
import '../../pages/commonPage/Homepage/Homepage.scss';
function ContentHomePage() {
  return (
    <>
      <section className='home'>
      <div className="overlay"></div>
      <video src={koiVideo} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container_homepage">
        <div className="textDiv">
          <h1 className="homeTitle">
            Chào mừng bạn đến với trang web KOI FARM SHOP của chúng tôi
          </h1>
          <span className="smallText">
          Dịch vụ chuyên nghiệp, tận tâm – Chúng tôi không chỉ cung cấp các loại cá chất lượng cao 
          và thức ăn chuyên dụng, mà còn hỗ trợ khách hàng trong việc ký gửi và chăm sóc cá. Cam kết mang 
          đến trải nghiệm tốt nhất cho khách hàng.
          </span>
          
        </div>

      </div>
    </section>
    <section className="main container_homepage section">
      <div className="secTitle">
        <h3 className="title">
          content
        </h3>
      </div>
    </section>
    </>
  )
}

export default ContentHomePage