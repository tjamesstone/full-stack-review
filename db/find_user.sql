SELECT h.user_id, name, email, is_admin, hash FROM husers h
JOIN husers_login hl ON  h.user_id = hl.user_id
WHERE email = $1;