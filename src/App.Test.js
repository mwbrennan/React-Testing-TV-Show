import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

const fetchData = {
    data: [
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
    }
    {
        id: 578664,
        url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 3,
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
    }
    {
        id: 578665,
        url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 4,
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
    }
]
};

test('render without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(fetchData);
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    userEvent.click(dropdown);

    const seasonOne = await screen.findByText(/season 1/i);
    expect(seasonOne).toBeInTheDocument();
    userEvent.click(seasonOne); 

})

