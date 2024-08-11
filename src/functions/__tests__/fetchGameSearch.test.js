import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import fetchGameSearch from '../fetchGameSearch';

vi.mock('axios');

describe('fetchGameSearch', () => {
  const query = 'testQuery';
  const API_BASE_URL = 'http://example.com';
  const token = 'fakeToken';
  const setGameData = vi.fn();
  const setError = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch game data and call setGameData with the result', async () => {
    const mockData = { games: { id: 1, name: 'Test Game' } };

    axios.get.mockResolvedValueOnce({ data: mockData });

    await fetchGameSearch(query, API_BASE_URL, token, setGameData, setError);

    expect(axios.get).toHaveBeenCalledWith(
      `${API_BASE_URL}/games/search?query=${query}&strict=true`,
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
    expect(setGameData).toHaveBeenCalledWith(mockData.games);
    expect(setError).toHaveBeenCalledWith(null);
  });

  it('should handle errors and call setError with the error message', async () => {
    const mockErrorMessage = 'Game not found';

    axios.get.mockRejectedValueOnce({
      response: { data: { message: mockErrorMessage } },
    });

    await fetchGameSearch(query, API_BASE_URL, token, setGameData, setError);

    expect(setGameData).not.toHaveBeenCalled();
    expect(setError).toHaveBeenCalledWith(mockErrorMessage);
  });

  it('should handle network errors and call setError with a generic message', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await fetchGameSearch(query, API_BASE_URL, token, setGameData, setError);

    expect(setGameData).not.toHaveBeenCalled();
    expect(setError).toHaveBeenCalledWith("An error occurred while searching for the game");
  });
});
