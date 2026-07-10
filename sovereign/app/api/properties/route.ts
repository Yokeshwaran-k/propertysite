import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
  const [rows] = await db.query(`
    SELECT
        ID,
        post_title,
        post_type,
        post_status
    FROM wp_posts
    LIMIT 20
`);

return NextResponse.json(rows);
      
  } catch (error) {
    return NextResponse.json(
      {
        message: "Database connection failed",
        error,
      },
      {
        status: 500,
      }
    );
  }
}