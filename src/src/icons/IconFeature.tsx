import { FC } from 'react';

interface IProps {
    color?: string;
    width?: number;
    height?: number;
}

export const IconFeature: FC<IProps> = ({ color = '#6A5ECC', width = 14, height = 14 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.02493 5.33338L7.79992 1.30005C7.55826 0.508382 6.44159 0.508382 6.20826 1.30005L4.97492 5.33338H1.26659C0.458258 5.33338 0.124925 6.37505 0.783258 6.84172L3.81659 9.00838L2.62492 12.85C2.38326 13.625 3.28326 14.25 3.92493 13.7584L6.99993 11.425L10.0749 13.7667C10.7166 14.2584 11.6166 13.6334 11.3749 12.8584L10.1833 9.01672L13.2166 6.85005C13.8749 6.37505 13.5416 5.34172 12.7333 5.34172H9.02493V5.33338Z"
                fill={color}
            />
        </svg>
    );
};
