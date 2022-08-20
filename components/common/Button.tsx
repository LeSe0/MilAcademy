import { Button, Link } from "@mui/material";

interface IReadMore {
  title: string;
  path: string;
}

export function ReadMoreButton({ title, path }: IReadMore) {
  return (
    <Button
      variant="outlined"
      sx={{
        border: 2,
        borderColor: "black",
        width: { xs: "180px", sm: "240px" },
        height: { xs: "50px", sm: "70px", lg: "80px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          border: 2,
          borderColor: "black"
        }
      }}
    >
      <Link href={path} sx={{ color: "black", textDecoration: "none" }}>
        {title}
      </Link>
    </Button>
  );
}
