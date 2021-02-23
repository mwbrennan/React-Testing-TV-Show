import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const episodes = [
    {
        id: 578663,
        url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 2,
        type: "regular",
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        },
        summary: "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        _links: {
            self: {
                href: "https://api.tvmaze.com/episodes/578663"
            }
        }
    },
]

test('renders without errors', () => {
    render(<Episodes episodes={[]} />);
})


test('re-render properly with episode data', () => {
    const { rerender } = render(<Episodes episodes={[]} />);

    let episodeObjects = screen.queryAllByTestId('episode');
    expect(episodeObjects).toStrictEqual([]); 
    expect(episodeObjects).toHaveLength(0);
    
    rerender(<Episodes episodes={episodes} />);
    episodeObjects = screen.queryAllByTestId('episode');
})


  