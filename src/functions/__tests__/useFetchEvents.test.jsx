import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import useFetchEvents from '../useFetchEvents';
import { useEffect } from 'react';

vi.mock('axios');
vi.mock('../config', () => ({
  API_BASE_URL: 'http://example.com',
  getToken: () => 'fakeToken',
}));

const TestComponent = ({ hosted }) => {
  const { events, loading, error } = useFetchEvents(hosted);

  useEffect(() => {
    if (!loading && !error) {
      // screen.logTestingPlaygroundURL();
    }
  }, [loading, error]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.eventDate}</li>
        ))}
      </ul>
    </div>
  );
};

describe('useFetchEvents', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch and sort events, then update state accordingly', async () => {
    const mockEvents = [
      { id: 1, eventDate: '2024-08-15' },
      { id: 2, eventDate: '2024-08-10' },
      { id: 3, eventDate: '2024-08-12' },
    ];
    
    axios.get.mockResolvedValueOnce({ data: { events: mockEvents } });

    render(<TestComponent hosted={true} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/failed to load events/i)).not.toBeInTheDocument();
    expect(screen.getByText('2024-08-10')).toBeInTheDocument();
    expect(screen.getByText('2024-08-12')).toBeInTheDocument();
    expect(screen.getByText('2024-08-15')).toBeInTheDocument();
  });

  it('should set an error state if fetching events fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<TestComponent hosted={false} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.getByText(/failed to load events/i)).toBeInTheDocument();
  });
});
