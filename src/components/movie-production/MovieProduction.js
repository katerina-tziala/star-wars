import React from 'react';
import './MovieProduction.css';
import { getDisplayedDateFormat } from "../../utils/utils";

const MovieProduction = ({ movie, showProducer = false }) => {
    const releaseDate = () => {
        return getDisplayedDateFormat(movie.release_date);
    };

    const producer = () => {
        if (!showProducer) {
            return <></>;
        }
        return <tr>
            <th>producer:</th>
            <td>{movie.producer}</td>
        </tr>;
    };

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>release date:</th>
                        <td>{releaseDate()}</td>
                    </tr>
                    <tr>
                        <th>director:</th>
                        <td>{movie.director}</td>
                    </tr>
                    {producer()}
                </tbody>
            </table>
        </>
    )
};

export default MovieProduction;