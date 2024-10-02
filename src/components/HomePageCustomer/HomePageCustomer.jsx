

export default function HomePageCustomer() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f0f8ff',
            minHeight: '100vh',
        },
        header: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        welcomeMessage: {
            margin: '20px 0',
            fontSize: '24px',
            color: '#0056b3',
        },
        banner: {
            background: 'url(https://cdn.tgdd.vn/Files/2023/04/02/1522845/199-hinh-anh-ca-koi-dep-den-me-hon-3d-4k-full-hd-trieu-like_1-070423-105052.jpg) center center/cover no-repeat',
            color: 'white',
            textAlign: 'center',
            padding: '80px 20px',
            borderRadius: '10px',
            margin: '20px 0',
        },
        featuredProducts: {
            padding: '50px',
            textAlign: 'center',
        },
        productsList: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        },
        productCard: {
            border: '1px solid #007bff',
            padding: '20px',
            borderRadius: '10px',
            width: '220px',
            textAlign: 'center',
            margin: '10px',
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        aboutUs: {
            padding: '50px',
            textAlign: 'center',
            backgroundColor: '#e6f7ff',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        reviews: {
            padding: '50px',
            textAlign: 'center',
        },
        reviewCard: {
            border: '1px solid #007bff',
            padding: '20px',
            borderRadius: '10px',
            margin: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        contact: {
            padding: '50px',
            textAlign: 'center',
            backgroundColor: '#e6f7ff',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        footer: {
            backgroundColor: '#003d7a',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            position: 'relative',
            bottom: '0',
            width: '100%',
        },
    };

    const products = [
        { id: 1, name: 'Cá Koi Đẹp 1', price: '500,000 VNĐ', img: 'https://askoi.vn/wp-content/uploads/2016/01/ca-koi-buon.jpg' },
        { id: 2, name: 'Cá Koi Đẹp 2', price: '600,000 VNĐ', img: 'https://askoi.vn/wp-content/uploads/2016/01/ca-koi-buon.jpg' },
        { id: 3, name: 'Cá Koi Đẹp 3', price: '700,000 VNĐ', img: 'https://askoi.vn/wp-content/uploads/2016/01/ca-koi-buon.jpg' },
    ];

    const reviews = [
        { id: 1, customer: 'Nguyễn Văn A', comment: 'Cá đẹp và khỏe mạnh, dịch vụ tuyệt vời!' },
        { id: 2, customer: 'Trần Thị B', comment: 'Chất lượng sản phẩm rất tốt, tôi rất hài lòng.' },
        { id: 3, customer: 'Lê Văn C', comment: 'Tôi sẽ giới thiệu cho bạn bè của mình!' },
    ];

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1>Cửa Hàng Cá Koi</h1>
            </header>

            {/* Welcome Message */}
            <div style={styles.welcomeMessage}>
                <h2>Chào mừng bạn đến với Cửa Hàng Cá Koi!</h2>
            </div>

            {/* Banner */}
            <div style={styles.banner}>
                <h2>Khám Phá Thế Giới Cá Koi!</h2>
                <p>Chúng tôi cung cấp các loại cá Koi chất lượng nhất.</p>
            </div>

            {/* Featured Products */}
            <div style={styles.featuredProducts}>
                <h3>Sản Phẩm Nổi Bật</h3>
                <div style={styles.productsList}>
                    {products.map(product => (
                        <div key={product.id} style={styles.productCard}>
                            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                            <button style={styles.button}>Mua Ngay</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Reviews */}
            <div style={styles.reviews}>
                <h3>Đánh Giá Khách Hàng</h3>
                <div style={styles.productsList}>
                    {reviews.map(review => (
                        <div key={review.id} style={styles.reviewCard}>
                            <h4>{review.customer}</h4>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Us */}
            <div style={styles.aboutUs}>
                <h3>Về Chúng Tôi</h3>
                <p>Chúng tôi là đơn vị hàng đầu trong lĩnh vực cung cấp cá Koi chất lượng cao. Với nhiều năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng những sản phẩm tốt nhất.</p>
            </div>

            {/* Contact Us */}
            <div style={styles.contact}>
                <h3>Liên Hệ Chúng Tôi</h3>
                <p>Địa chỉ: 123 Đường Lê Lợi, Thành Phố Hồ Chí Minh</p>
                <p>Số điện thoại: 0123-456-789</p>
                <p>Email: info@cakhoi.com</p>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; 2024 Cửa Hàng Cá Koi. Tất cả quyền được bảo lưu.</p>
            </footer>
        </div>
    );
}
