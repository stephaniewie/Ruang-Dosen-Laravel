<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Dosen</title>
</head>
<body>

<h2>Login Dosen</h2>

@if($errors->any())
    <div style="color:red">
        {{ $errors->first() }}
    </div>
@endif

<form action="{{ route('login') }}" method="POST">
    @csrf
    <label>Email:</label>
    <input type="email" name="email" required><br><br>

    <label>Password:</label>
    <input type="password" name="password" required><br><br>

    <button type="submit">Login</button>
</form>

</body>
</html>
