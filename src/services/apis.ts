export const getRepositories = async (fullName: string) => {
    const response = await fetch(`https://api.github.com/repos/${fullName}`);
    if (!response.ok) {
        throw new Error('Repository not found');
    }
    return response.json();
}