import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export default function WantedPeopleList({
  wantedPeople,
}: {
  wantedPeople: any;
}) {
  return (
    <ImageList cols={5}>
      {wantedPeople.map((wantedPerson: any) => (
        <ImageListItem key={wantedPerson["@id"]}>
          <img
            src={wantedPerson.images[0].original}
            alt={wantedPerson.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={wantedPerson.title}
            subtitle={wantedPerson.description}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
