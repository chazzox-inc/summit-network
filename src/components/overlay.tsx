import type { GetImageResult } from "astro";
import { useState, type FC, type PropsWithChildren } from "react";

const Overlay: FC<
    PropsWithChildren<{
        images: GetImageResult[];
    }>
> = ({ images }) => {
    const [activeImageIndex, setActiveImageIndex] = useState<undefined | number>();

    return (
        <>
            {activeImageIndex && (
                <div
                    className="fixed top-0 mx-auto flex h-screen w-full items-center p-10"
                    onClick={() => setActiveImageIndex(undefined)}
                >
                    {
                        <img
                            src={images[activeImageIndex].srcSet.values[1].url}
                            className="h-nearly-screen object-contain"
                            alt=""
                        />
                    }
                </div>
            )}
            <div className="flex w-full flex-wrap gap-3 p-6">
                {images.map((image, index) => (
                    <img
                        className="cursor-pointer"
                        key={index}
                        src={image.srcSet.values[0].url}
                        height={70}
                        width={70}
                        onClick={() => setActiveImageIndex(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Overlay;
