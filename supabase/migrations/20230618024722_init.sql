create table if not exists golf_rounds (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  round_id uuid not null,
  hole_number int check (hole_number >= 1 and hole_number <= 18),
  score int,
  fairway_hit boolean,
  green_hit boolean,
  drive_distance int,
  approach_distance int,
  proximity_to_hole int,
  putts_amount int,
  putt_made_length int,
  scramble boolean,
  sand_save boolean,
  committed_shots int,
  user_id uuid references auth.users default auth.uid()
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table golf_rounds
  enable row level security;

create policy "Authenticated users can select their own golf rounds" on golf_rounds
  for select to authenticated using (auth.uid() = user_id);

create policy "Authenticated users can insert their own golf rounds" on golf_rounds
  for insert to authenticated with check (auth.uid() = user_id);
