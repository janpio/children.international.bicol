import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const child = await db.child.findUnique({
    where: { id: params.id },
    include: { family: { include: { guardians: true } } },
  })

  return NextResponse.json({ child })
}
