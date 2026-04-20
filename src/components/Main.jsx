import Center from './Center';
import TopLeft from './TopLeft';
import TopRight from './TopRight'
import BottomLeft from './BottomLeft';
import BottomRight from './BottomRight';

export default function Main() {
    return (
        <div id="main-container" className="w-[210svw] h-[210svh] bg-light-100">
            <div className='w-full h-full fixed -z-1 pointer-events-none'>
                <svg width="140%" height="116%" viewBox="0 0 1874 711" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1429.83 2.75627C1429.83 2.75627 1075.3 -26.828 1045.33 128.256C1023.36 241.957 1222.32 276.9 1188.83 387.756C1148.6 520.951 937.644 370.921 842.833 472.756C781.729 538.387 831.912 637.789 755.833 685.256C649.31 751.719 511.415 674.227 459.833 559.756C395.931 417.942 724.24 373.903 676.833 225.756C641.898 116.585 558.269 53.8356 443.833 47.2563C319.908 40.1314 235.883 114.501 180.833 225.756C141.412 305.426 189.666 369.072 158.333 452.256C122.759 546.701 0.333054 656.756 0.333054 656.756" stroke="oklch(95.6% 0.005 106.5)" strokeWidth="60" className="path-ref" strokeLinecap="round"/>
                </svg>
            </div>
            <Center />
            <TopLeft />
            <TopRight />
            <BottomLeft />
            <BottomRight />
        </div>
    )
}