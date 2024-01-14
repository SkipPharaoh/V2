import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  const emptyStateText = "Could not find requested page";
  const emptyStateButtonText = "Return Home";

  return (
    <EmptyState
      type="empty"
      text={emptyStateText}
      buttonText={emptyStateButtonText}
    />
  );
}
