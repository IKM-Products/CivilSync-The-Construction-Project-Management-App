const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export function validateImage(file: File) {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_IMAGE_TYPES)[number])) {
    throw new Error(
      "Invalid image format. Only JPG, JPEG, PNG, and WEBP are allowed."
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image size must be less than 5 MB.");
  }

  return true;
}

export { MAX_FILE_SIZE, ALLOWED_IMAGE_TYPES };