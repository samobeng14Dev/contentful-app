import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
	space: "b1xqz13cfrry",
	environment: "master",
	accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProject = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);
	const getData = async () => {
		try {
			const response = await client.getEntries({ content_type: "project" });
			const project = response.items.map((item) => {
				const { title, url, image } = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;

				return { title, url, id, img };
			});
			setProjects(project);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return { loading, projects };
};

// client.getEntries({ content_type: "project" }).then((response) => {
// 	console.log(response);
// });
