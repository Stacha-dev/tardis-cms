import { useCallback } from 'react';
import { useStore, useLoading } from './index';

const useGallery = () => {
	const { galleryService } = useStore();
	const { setLoading } = useLoading();

	const handleError = useCallback(
		(error: Error) => {
			console.error(error);
			setLoading(false);
		},
		[setLoading]
	);

	const fetch = useCallback(
		async (id: number) => {
			try {
				setLoading(true);
				const response = await galleryService.getOneById(id);
				setLoading(false);
				return response;
			} catch (error) {
				handleError(error);
			}
		},
		[handleError, galleryService, setLoading]
	);

	return { fetchGallery: fetch };
};

export default useGallery;
