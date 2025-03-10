import { SlOptions } from "react-icons/sl"
const ProductReview = ({
    backgroundColor,
    iconColor,
}: {
    backgroundColor: string
    iconColor: string
}) => {
    return (
        <div className={`bg-[21px] p-4 ${backgroundColor} rounded-[21px] md:w-64 sm:w-48 w-full`}>
            <div className="flex justify-between">
                <svg
                    width="32"
                    height="36"
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.8 35.1949C26.4834 35.195 28.1033 34.4693 29.3281 33.1663C30.553 31.8634 31.2902 30.0816 31.389 28.1856L31.4 27.7487V17.8205H22.6L22.2128 17.8081C20.5989 17.7012 19.0759 16.9297 17.9327 15.64C16.7896 14.3502 16.1057 12.632 16.011 10.8112L16 10.3744V0.446152H7.19998C5.51651 0.446045 3.89664 1.17172 2.6718 2.47469C1.44696 3.77766 0.709739 5.55944 0.610976 7.45547L0.599976 7.89231V27.7487C0.599882 29.648 1.24309 31.4756 2.398 32.8574C3.55291 34.2393 5.13221 35.071 6.81278 35.1825L7.19998 35.1949H24.8ZM31.18 15.336C31.0094 14.7457 30.7423 14.1968 30.3924 13.7177L30.1108 13.3702L19.9446 1.90063C19.4518 1.34465 18.8534 0.932636 18.2022 0.691875L18.2 10.3744L18.211 10.7467C18.2897 11.9285 18.7406 13.0396 19.4823 13.8791C20.2239 14.7185 21.2073 15.2309 22.2546 15.3236L22.6 15.3385L31.18 15.336Z"
                        fill={iconColor}
                    />
                </svg>
                <SlOptions size="18px" className="cursor-pointer" />
            </div>
            <p className="font-bold text-[#4C4B4B] text-[18px] sm:text-[20px] leading-[23.48px] mt-6">
                Product Review
            </p>
            <p className="text-[14px] text-[#7A7A7A] leading-[16.44px] mt-2">
                12/12/2024
            </p>
        </div>
    )
}

export default ProductReview
