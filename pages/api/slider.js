export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "Slide 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "Slide 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://source.unsplash.com/random/800x600",
    },
  ]);
}
