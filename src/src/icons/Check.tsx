import { FC } from 'react';

interface IProps {
    color?: string;
}

export const IconCheck: FC<IProps> = ({ color = '#6A5ECC' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.1725 16.1625L5.7025 12.6925C5.3125 12.3025 4.6825 12.3025 4.2925 12.6925C3.9025 13.0825 3.9025 13.7125 4.2925 14.1025L8.4725 18.2825C8.8625 18.6725 9.4925 18.6725 9.8825 18.2825L20.4625 7.7025C20.8525 7.3125 20.8525 6.6825 20.4625 6.2925C20.0725 5.9025 19.4425 5.9025 19.0525 6.2925L9.1725 16.1625Z"
                fill={color}
            />
        </svg>
    );
};
