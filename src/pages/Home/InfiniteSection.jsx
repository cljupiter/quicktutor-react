import react from "react";
import SingleInfinite from "../../components/SingleInfinite/SingleInfinite.jsx";
import MobileSingleInfinite from "../../components/MobileSingleInfinite/MobileSingleInfinite.jsx";
import SingleDirection from "../../components/SingleDirection/SingleDirection.jsx";
import MobileSingleDirection from "../../components/MobileSingleDirection/MobileSingleDirection.jsx";
const InfiniteSection = () => {
    const desktopInfiniteData = [
        {
            title: "The Arts",
            image: "assets/images/image-item-1.png",
            icon: "assets/images/stack.svg",
        },
        {
            title: "Technology",
            image: "assets/images/image-item-2.png",
            icon: "assets/images/tv.svg",
        },
        {
            title: "Auto",
            image: "assets/images/image-item-3.png",
            icon: "assets/images/car.svg",
        },
        {
            title: "Remedial",
            image: "assets/images/image-item-4.png",
            icon: "assets/images/remedial.svg",
        },
        {
            title: "Academics",
            image: "assets/images/image-item-5.png",
            icon: "assets/images/academics.svg",
        },
        {
            title: "Trades",
            image: "assets/images/image-item-6.png",
            icon: "assets/images/auto.png",
        },
        {
            title: "Sports & Games",
            image: "assets/images/image-item-7.png",
            icon: "assets/images/sport.svg",
        },
        {
            title: "Business",
            image: "assets/images/image-item-8.png",
            icon: "assets/images/briefcase.svg",
        },
        {
            title: "Outdoors",
            image: "assets/images/image-item-9.png",
            icon: "assets/images/compass.svg",
        },
        {
            title: "Language",
            image: "assets/images/image-item-10.png",
            icon: "assets/images/single-message.svg",
        },
        {
            title: "Lifestyle",
            image: "assets/images/image-item-11.png",
            icon: "assets/images/single-user.svg",
        },
        {
            title: "Health",
            image: "assets/images/image-item-12.png",
            icon: "assets/images/heartbeat.svg",
        },
    ];
    const mobileDirection = [ 
        {
            title: "Learn",
            direction: "right",
        },
        {
            title: "Teach",
            direction: "left",
        },
    ];
    return (
        <div className="content-section infinite-section">
            <div className="title">
                <span>Infinite Possibilities</span>
            </div>
            <div className="img-panel">
                <div className="img-group-wrapper desktop-screen">
                    <div className="img-item-group">
                        {desktopInfiniteData.map((item, index) => {
                            if (index <= 1)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                    </div>
                    <div className="img-item-group">
                        {desktopInfiniteData.map((item, index) => {
                            if (index > 1 && index <=4)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                    </div>
                    <div className="img-item-group">
                        {desktopInfiniteData.map((item, index) => {
                            if (index === 5)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                        <SingleDirection data="Learn" />
                    </div>
                </div>
                <div className="img-group-wrapper desktop-screen">
                    <div className="img-item-group">
                        <SingleDirection data="Teach" />
                        {desktopInfiniteData.map((item, index) => {
                            if (index === 6)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                    </div>
                    <div className="img-item-group">
                        {desktopInfiniteData.map((item, index) => {
                            if (index > 6 && index <=9)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                    </div>
                    <div className="img-item-group">
                        {desktopInfiniteData.map((item, index) => {
                            if (index > 9 && index <=11)
                                return <SingleInfinite key={index} data={item} />;
                            else return <div></div>;
                        })}
                    </div>
                </div>
                <div id="mobile-screen">
                    {desktopInfiniteData.map((item, index) => {
                        if (index <= 6) return <MobileSingleInfinite key={index} data={item} />;
                        else return <div></div>;
                    })}
                    {mobileDirection.map((item, index) => (
                        <MobileSingleDirection data={item} key={index} />
                    ))}
                    {desktopInfiniteData.map((item, index) => {
                        if (index > 6) return <MobileSingleInfinite key={index} data={item} />;
                        else return <div></div>;
                    })}
                </div>
            </div>
            <div className="section-border"></div>
        </div>
    );
};
export default InfiniteSection;